export const chatbotConfig = Object.freeze({
  enabled: false,
  collectPersonalData: false,
  transmitLeadEvents: false,
  mountId: "synqrix-chatbot-root"
});

export function mountSynqrixChatbot() {
  if (!chatbotConfig.enabled) return { mounted: false, reason: "disabled-by-default" };
  // Gelecekteki Synqrix istemcisi yalnızca açık müşteri onayı ve gizlilik metni sonrası burada başlatılmalı.
  return { mounted: false, reason: "integration-not-installed" };
}
