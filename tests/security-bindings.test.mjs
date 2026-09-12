import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../contracts/IntentFirewall.py", import.meta.url), "utf8");

test("action hash is contract-derived from canonical payload", () => {
  assert.match(source, /payload = json\.dumps\(\{"action": action, "declared_risk": int\(declared_risk\), "target": str\(target\)\}/);
  assert.match(source, /action_hash = hashlib\.sha256\(payload\.encode\("utf-8"\)\)\.hexdigest\(\)/);
  assert.doesNotMatch(source, /def request_action\([^\n]*action_hash/);
});

test("evaluation is evaluator-authorized and binds target plus context", () => {
  assert.match(source, /sender_address != session\.evaluator/);
  assert.match(source, /"target": str\(action\.target\)/);
  assert.match(source, /"context_hash": action\.context_hash/);
  assert.match(source, /commit_context\(self, request_id: str, context_hash: str\)/);
  assert.match(source, /hashlib\.sha256\(context\.encode\("utf-8"\)\)\.hexdigest\(\) != action\.context_hash/);
});

test("certificate consumption is restricted to the bound principal", () => {
  assert.match(source, /sender_address != certificate\.consumer/);
  assert.match(source, /certificate\.action_hash != action_hash/);
  assert.match(source, /certificate\.target != target/);
});
