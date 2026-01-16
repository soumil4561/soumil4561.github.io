let emailjsPromise: Promise<typeof import("@emailjs/browser")> | null = null;
let initialized = false;

async function loadEmailJS() {
  if (!emailjsPromise) {
    emailjsPromise = import("@emailjs/browser");
  }

  return emailjsPromise;
}

export async function getEmailClient() {
  const emailjs = await loadEmailJS();

  if (!initialized) {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      blockList: {
        list: [],
        watchVariable: "userEmail",
      },
      limitRate: {
        id: "app",
        throttle: 10000, // Allow 1 request per 10s
      },
    });

    initialized = true;
  }

  return emailjs;
}

export async function sendEmail(
  serviceId: string,
  templateId: string,
  payload: Record<string, unknown>,
): Promise<EmailJSResponseStatus> {
  const emailjs = await getEmailClient();

  return await emailjs.send(serviceId, templateId, payload);
}
