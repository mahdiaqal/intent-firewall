# Live Bradbury proofs

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

## Live StudioNet proofs

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
