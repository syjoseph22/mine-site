export async function submitEmailToGoogleSheets(email, sourcePage = "/") {
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxSmeSr-VGMeEP-s1YNBeJX0PfFz3GXnODTMGbc31Z9n8y8hKsUOqZ7nSp3ed6litwT/exec",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          sourcePage,
        }),
      }
    );

    return { success: true };
  } catch (err) {
    console.error("Email submit error:", err);
    return { success: false, error: err };
  }
}
