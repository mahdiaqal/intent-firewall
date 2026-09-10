# IntentFirewall

IntentFirewall is a GenLayer consensus-controlled permission layer for autonomous agents. Human intent, forbidden actions, risk limits, agent authority, evaluator authority, and action bindings are stored on-chain. An `evaluate` call makes validators independently derive the six-field permission vector. The contract creates a one-time certificate only when consensus accepts every field and the declared risk is inside the immutable policy.

## Contract flow

`register_intent` -> `open_session` -> `request_action` -> `evaluate` -> `consume_certificate`

`request_action` derives the SHA-256 action hash from canonical JSON containing the exact action, target, and declared risk; callers cannot supply it. The intent owner designates an evaluator when opening the session. Only that evaluator may commit context and finalize consensus. The target, derived action hash, evaluator, context, request, and complete vector are proof-root inputs. `consume_certificate` additionally requires the bound agent principal, exact action hash, and exact target, preventing replay, substitution, unauthorized finalization, and third-party consumption.

## Validation

```powershell
genvm-lint check contracts/IntentFirewall.py
```

## Bradbury testnet deployment

```powershell
genlayer network set testnet-bradbury
genlayer deploy --contract contracts/IntentFirewall.py
```

Bradbury requires a funded testnet account. The verified deployment and proof transactions are recorded in `LIVE_PROOFS.md`; every listed transaction finished with `FINISHED_WITH_RETURN`.
