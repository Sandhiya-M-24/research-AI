export const researchData = {
  papers: [
    {
      id: "p1",
      title: "Neuromorphic Computing in Large-Scale Edge Networks",
      authors: ["Dr. Aris Thorne", "Sarah Jenkins"],
      year: 2024,
      keywords: ["AI", "Neuromorphic", "Edge Computing"],
      citations: 450,
      methodology: "Simulated annealing on synaptic mapping architectures",
      abstract: "Explores the integration of brain-inspired hardware in decentralised systems to reduce latency."
    },
    {
      id: "p2",
      title: "Quantum Error Correction via Topological Surface Codes",
      authors: ["X. Wang", "Y. Tanaka"],
      year: 2025,
      keywords: ["Quantum", "Topological", "Error Correction"],
      citations: 120,
      methodology: "Lattice-based stability testing",
      abstract: "A novel approach to maintaining qubit coherence in noisy intermediate-scale quantum devices."
    },
    {
      id: "p3",
      title: "Synthetic Biological Circuits for Targeted Drug Delivery",
      authors: ["Elena Rossi"],
      year: 2023,
      keywords: ["Biotech", "Synthetic Bio", "Nano-robotics"],
      citations: 890,
      methodology: "CRISPR-Cas9 gene editing and protein folding simulations",
      abstract: "Designing autonomous cellular machines that respond to specific biochemical markers in real-time."
    }
  ],
  trends: [
    { name: "Generative Reasoning", growth: 85, status: "Rising" },
    { name: "Green AI (Efficiency)", growth: 72, status: "Rising" },
    { name: "Legacy Expert Systems", growth: -30, status: "Declining" },
    { name: "Synthetic Genomics", growth: 64, status: "High-Growth" }
  ],
  clusters: [
    {
      name: "Bio-Digital Convergence",
      description: "Merging of biological systems with computational interfaces.",
      papers: ["Synthetic Biological Circuits...", "Brain-Machine Interfaces 2.0"],
      connections: ["Healthcare", "Neuroscience"]
    },
    {
      name: "Quantum-Neural Synergies",
      description: "Utilizing quantum hardware to accelerate neural network training.",
      papers: ["Quantum Error Correction...", "Qubits for ML"],
      connections: ["Physics", "Computer Science"]
    }
  ],
  gaps: [
    {
      title: "Long-term Stability in Bio-Hybrid Networks",
      density: "Low",
      potential: "Critical",
      description: "While short-term results are promising, the degradation of organic components in hybrid systems remains a massive hurdle."
    },
    {
      title: "Cross-Domain Ethical Frameworks for Autonomous Synth-Life",
      density: "Extremely Low",
      potential: "High",
      description: "Lack of jurisdictional standards for research involving synthetic organisms with basic cognition."
    }
  ],
  methodologyInsights: {
    common: ["Reinforcement Learning from Human Feedback (RLHF)", "Transformer Architectures", "CRISPR-Cas9"],
    limitations: "Excessive energy consumption in training; inability to handle non-Euclidean data structures effectively.",
    suggestions: "Shift towards Geometric Deep Learning and Passive Cooling Neuromorphic chips."
  },
  suggestedDirections: [
    {
      title: "AI-Driven Material Discovery for Quantum Superconductors",
      idea: "Using Graph Neural Networks to predict high-temperature superconductivity in nickelate compounds."
    },
    {
      title: "Ethical Osmosis: Trans-species Intelligence Governance",
      idea: "Developing a unified legal framework for augmented animals and advanced artificial agents."
    }
  ]
};
