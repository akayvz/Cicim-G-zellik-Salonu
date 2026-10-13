import test from "node:test";
import assert from "node:assert/strict";
import { business, sources } from "../src/data/business.js";
import { faqs, knowledgeBase } from "../src/data/knowledge-base.js";
import { chatbotConfig } from "../src/components/SynqrixChatbotMount.js";

test("kritik iletişim ve konum verileri dolu", () => {
  assert.match(business.phone.e164, /^\+90\d{10}$/);
  assert.ok(business.address.street.includes("No:69"));
  assert.ok(business.mapsSearchUrl.startsWith("https://www.google.com/maps/search/"));
});
test("riskli özellikler güvenli varsayılanlarda", () => {
  assert.equal(business.whatsapp.enabled, false);
  assert.equal(chatbotConfig.enabled, false);
  assert.equal(chatbotConfig.collectPersonalData, false);
  assert.equal(business.reviews.published, false);
});
test("saat çelişkisi ve kaynak geçmişi korunuyor", () => {
  assert.equal(business.hours.status, "conflicting");
  assert.ok(business.hours.variants.length >= 2);
  assert.ok(sources.every((source) => source.checkedAt === "2026-10-13"));
});
test("bilgi tabanı güvenli fallback ve yapılandırılmış FAQ içeriyor", () => {
  assert.ok(faqs.length >= 4);
  assert.match(knowledgeBase.safetyPolicy.fallback, /tahminde bulunma/);
});
