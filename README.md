# IntentFirewall

IntentFirewall is a GenLayer consensus-controlled permission layer for autonomous agents. Human intent, forbidden actions, risk limits, agent authority, and action bindings are stored on-chain. An `evaluate` call makes validators independently derive the six-field permission vector. The contract creates a one-time certificate only when consensus accepts every field and the declared risk is inside the immutable policy.

## Contract flow

`register_intent` -> `open_session` -> `request_action` -> `evaluate` -> `consume_certificate`

`evaluate` writes an immutable proof packet (`get_proof`) containing the consensus vector and SHA-256 root. `consume_certificate` binds use to the original action hash and target, preventing replay or target/parameter substitution.

## Validation

```powershell
genvm-lint check contracts/IntentFirewall.py
```

## StudioNet deployment

```powershell
genlayer network set studionet
genlayer deploy --contract contracts/IntentFirewall.py
```

StudioNet is gasless. Save the deployment transaction and contract address in `LIVE_PROOFS.md`; only record transactions whose receipt execution result succeeded.
