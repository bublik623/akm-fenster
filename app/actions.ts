"use server";

export type RequestState = { ok: boolean; error?: string };

export async function submitCallbackRequest(formData: FormData): Promise<RequestState> {
  const name = String(formData.get("name") ?? "").trim();
  const tel = String(formData.get("tel") ?? "").trim();

  if (!name || tel.replace(/\D/g, "").length < 6) {
    return { ok: false, error: "Bitte Name und eine gültige Telefonnummer angeben." };
  }

  // TODO: deliver the request (e-mail service, CRM, …). Until then it is only logged on the server.
  console.log("[Rückruf-Anfrage]", {
    name,
    tel,
    mail: formData.get("mail"),
    msg: formData.get("msg"),
  });

  return { ok: true };
}
