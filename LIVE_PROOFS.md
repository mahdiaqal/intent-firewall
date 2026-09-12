# Corrected StudioNet deployment (v3)

## Immutable evaluator-context binding

- Contract: [`0xE815E0f95161976c92Cf9e3472B00Da6116007e8`](https://explorer-studio.genlayer.com/address/0xE815E0f95161976c92Cf9e3472B00Da6116007e8)
- Deployment: [`0x0b96255c...7bdbb3`](https://explorer-studio.genlayer.com/tx/0x0b96255c352e1dd099e1a0e911f968e7b2a00b97d3dd976a8e61338bad7bdbb3)
- Intent registration: [`0x3ad223f7...a2052c`](https://explorer-studio.genlayer.com/tx/0x3ad223f7b2e59097fa28fb39daaeb57781909fdf8514bfe15d4947f374a2052c)
- Evaluator-bound session: [`0x10accaa6...e0a142`](https://explorer-studio.genlayer.com/tx/0x10accaa6b757574324d0d86da40a71db831c9c5d8eb79f4acb637a86d7e0a142)
- Agent action request: [`0x4ab4624e...638549`](https://explorer-studio.genlayer.com/tx/0x4ab4624ec9db2fffc974424a9a5dee46fc4461cc2d21e753aa505a74ab638549)
- Evaluator context commitment: [`0x7240c152...de565f`](https://explorer-studio.genlayer.com/tx/0x7240c152d61adbb605c584bab6ae1916c69d796f6bd9c10f908e3164fede565f)
- Consensus evaluation: [`0x8ea71db8...3018e8`](https://explorer-studio.genlayer.com/tx/0x8ea71db8c92c44afe3855d3cd608f9d9f29678b7bfb37a8c33ce19deb23018e8)
- Principal-bound consumption: [`0x894d075c...08f53e`](https://explorer-studio.genlayer.com/tx/0x894d075c47ac77a61c77e4389aa5008937fd542f003d733e0ebae6623808f53e)

This corrected source introduces evaluator-only `commit_context`. The contract stores an immutable SHA-256 context commitment before evaluation, and `evaluate` rejects any context whose hash does not exactly match that commitment. The action hash remains contract-derived from the canonical `action`, `target`, and `declared_risk` payload; target, evaluator, and context commitment are bound into the consensus proof packet. Certificates remain bound to the requested action, target, and intended consumer and can be consumed once only by that consumer.

The v3 lifecycle reached `CONSUMED`. The contract-derived action hash was `bf16220090be3719988c5e18d7cabb31c17f7d363f13e9530932d8b0fc727ad6`; the evaluator's immutable context commitment was `6d74c670b0e77176a45dae99a3cc7698315f432fa509fad20faad5123eed65be`; and consensus stored proof root `47fdcaa5365fa74c62ae7935466fcdf8138d43ab006bf26aad2c1052b96036de` before the bound agent consumed the certificate.

## Previous corrected deployment (v2)

- Contract: [`0x1DCf29A4b8f1A7D003343bC5187Bbd241D50d1e5`](https://explorer-studio.genlayer.com/address/0x1DCf29A4b8f1A7D003343bC5187Bbd241D50d1e5)
- Deployment: [`0xb5b2ccd7...8ae66b`](https://explorer-studio.genlayer.com/tx/0xb5b2ccd7b9bd3c892fb42e6dc22961f3bd00f329c0e106d92da9711c978ae66b)
- Intent registration: [`0x879da8d7...d6694a`](https://explorer-studio.genlayer.com/tx/0x879da8d7772a82f6cafef9f986d9b49a316f26c8b5e59d62605337c05dd6694a)
- Evaluator-bound session: [`0x2cd35a5c...1e2964`](https://explorer-studio.genlayer.com/tx/0x2cd35a5ce8644ec9cdff9943b78e50a04f1c749ca18ab551586fd26e771e2964)
- Canonical payload binding: [`0x522be2a6...15a56`](https://explorer-studio.genlayer.com/tx/0x522be2a6fb9b9bef1c7245fae60e04355020c1e4fbe903be00e12e791c715a56)
- Authorized semantic evaluation: [`0xab77fc70...6214a`](https://explorer-studio.genlayer.com/tx/0xab77fc70ff0e45a819ab02f53168969cc2b278d7059fed55c1deae7c1666214a)
- Principal-bound consumption: [`0x21eec21f...29203`](https://explorer-studio.genlayer.com/tx/0x21eec21fcea9c7a111dff092fd0a0726f26ced417bc36345661c5d2dffc29203)

The contract derived action hash `9d2b386bcd35c9863badf9fe7402f76d9fe7668f537914f254e83e5d5dbfeddd` from the canonical action/target/risk payload. The designated evaluator committed context and validators agreed on all six authorization dimensions. The stored proof root is `80b16e8c6761cd201dca3a1aca8f7c8b492cdf0e8ac3d582f64dbd1ada1b8d51`. Consumption by the bound principal advanced the request to `CONSUMED`.

## Superseded deployments

The deployments below predate the v2 binding correction and are retained only as historical records. They are not evidence for the corrected source.

### Bradbury

- Contract: [`0xd7337aEd7DE763538b2f31fdfCdbdf5C59116853`](https://explorer-bradbury.genlayer.com/address/0xd7337aEd7DE763538b2f31fdfCdbdf5C59116853)
- Deployment: [`0x2a515a24...c056b4`](https://explorer-bradbury.genlayer.com/tx/0x2a515a2467432bef8e2862deebd2935d923d41a0f725c8c985c775d795c056b4)
- Intent registration: [`0x2b1a36b5...1e7f67`](https://explorer-bradbury.genlayer.com/tx/0x2b1a36b596841b25b3b4439d3c67c6068d3c9d0be4e2bf861f5e1fbe711e7f67)
- Agent session: [`0xf0f9fb7b...99480e`](https://explorer-bradbury.genlayer.com/tx/0xf0f9fb7b12913a016e4883d8ac8ce4adf57b4e8691cd13aec1279d7c5599480e)
- Safe action request: [`0x4ed81892...526831`](https://explorer-bradbury.genlayer.com/tx/0x4ed81892f2adedb05b5a06fd00840613d38e524e95d03882ef9eabe93e526831)
- Consensus evaluation: [`0x616fe42e...c27bc4`](https://explorer-bradbury.genlayer.com/tx/0x616fe42e6fb906757620813bce7a93df2449ba4da6ec0532d708a47b90c27bc4)
- One-time certificate consumption: [`0xf70a51f7...c32128`](https://explorer-bradbury.genlayer.com/tx/0xf70a51f71965e9e69e4704497cfb6b33514422a141944e6422d37fafe1c32128)

The consensus evaluation stored status `ALLOWED`, proof root `9021057d594d3591d17c8a5fc065030725c1604ef6c957032326e412a91009ab`, and this permission vector:

```json
{
  "authority": true,
  "constraints": true,
  "context": true,
  "impact": true,
  "intent_alignment": true,
  "risk": true
}
```

The certificate-consumption transaction advanced the action to `CONSUMED`. All five participating validators voted `AGREE` on that transition.

### StudioNet v1

- Deployer: [`0xB1c5d4B99756B81aC67257E5Bbd2305aDc15a6a6`](https://explorer-studio.genlayer.com/address/0xB1c5d4B99756B81aC67257E5Bbd2305aDc15a6a6)
- Contract: [`0x3fAF84FB7E6FC266f0798fF4F5E490bD1cd805c1`](https://explorer-studio.genlayer.com/address/0x3fAF84FB7E6FC266f0798fF4F5E490bD1cd805c1)
- Deployment: [`0xf89c41cb...92f42f`](https://explorer-studio.genlayer.com/tx/0xf89c41cb0ce2e1365a408b4d4e99d58345712caace8615a23fdf6a825392f42f)
- Intent registration: [`0x6d6b0d03...65c275`](https://explorer-studio.genlayer.com/tx/0x6d6b0d03310dfbdac46547e1dceeaa5e7310ee25bbb83e3887fb88184265c275)
- Agent session: [`0x164ff85d...ddd001`](https://explorer-studio.genlayer.com/tx/0x164ff85d9ed3a30a16d4e93c9098162a4108cdd66d4a3fc7197816edeaddd001)
- Action request: [`0x12331e10...6a505`](https://explorer-studio.genlayer.com/tx/0x12331e103944f7d7181b4df636fe7b90076d87668b52810599184a97d796a505)
- Semantic consensus evaluation: [`0x5419ca16...150c17`](https://explorer-studio.genlayer.com/tx/0x5419ca1620b184a9fb961e9ae612ef5b1ce5bebdb1481199493664f51b150c17)
- One-time certificate consumption: [`0xd9721bff...3d6101`](https://explorer-studio.genlayer.com/tx/0xd9721bff97e512d9af1b5f95f7b577c4f62eadee30e8b57916ecc78d743d6101)

The semantic evaluation returned `ALLOWED` and stored proof root `9021057d594d3591d17c8a5fc065030725c1604ef6c957032326e412a91009ab` with this exact permission vector:

```json
{
  "authority": true,
  "constraints": true,
  "context": true,
  "impact": true,
  "intent_alignment": true,
  "risk": true
}
```

The subsequent certificate-consumption transaction advanced the action to `CONSUMED`, demonstrating that the capability cannot be replayed.
