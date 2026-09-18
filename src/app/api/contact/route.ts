import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      name,
      phone,
      gender,
      city,
      painCondition,
      painConditionOther,
      duration,
      profession,
      professionOther,
      treatmentHistory,
      previousTreatment,
      preferredTime,
      callTime,
    } = body;

    // ── 1. Validate required fields ───────────────────────────────────────────
    const resolvedName = (fullName || name || '').trim();
    const resolvedPhone = (phone || '').trim();

    if (!resolvedName || !resolvedPhone) {
      return NextResponse.json(
        { error: 'Full Name and Phone Number are required.' },
        { status: 400 }
      );
    }

    // ── 2. Format values for Google Sheets ───────────────────────────────────
    const resolvedGender = (gender || '—').trim();
    const resolvedCity = (city || '—').trim();

    const finalPainCondition =
      painCondition === 'Other' && painConditionOther
        ? `Other: ${painConditionOther.trim()}`
        : painCondition || '—';

    const resolvedDuration = duration || '—';

    const finalProfession =
      profession === 'Other' && professionOther
        ? `Other: ${professionOther.trim()}`
        : profession || '—';

    const resolvedTreatmentHistory = treatmentHistory || previousTreatment || '—';
    const resolvedPreferredTime = preferredTime || callTime || '—';

    // ── 3. Google Sheets Authentication ───────────────────────────────────────
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.warn(
        '[Google Sheets Notice]: Missing environment variables (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, or GOOGLE_SHEET_ID). Submission logged locally.'
      );
      console.log('Lead Details:', {
        resolvedName,
        resolvedPhone,
        resolvedGender,
        resolvedCity,
        finalPainCondition,
        resolvedDuration,
        finalProfession,
        resolvedTreatmentHistory,
        resolvedPreferredTime,
      });

      return NextResponse.json(
        {
          success: true,
          warning: 'Form submitted. Set GOOGLE_SHEET_ID in .env.local to enable live Sheets sync.',
        },
        { status: 200 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // ── 4. Append row to Sheet ────────────────────────────────────────────────
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            resolvedName,
            resolvedPhone,
            resolvedGender,
            resolvedCity,
            finalPainCondition,
            resolvedDuration,
            finalProfession,
            resolvedTreatmentHistory,
            resolvedPreferredTime,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[Google Sheets API Error]:', message);
    return NextResponse.json(
      { error: 'Failed to submit booking details. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
