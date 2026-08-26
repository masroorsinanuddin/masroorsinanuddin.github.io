---
title: "What CUDA Peer Access Actually Enables"
description: "A compact mental model for direct memory access between GPUs."
date: 2026-08-20
tags: [CUDA, Multi-GPU]
---
## The boundary
Peer access allows one supported GPU to address memory allocated on another without staging the data through host memory. It enables a path; it does not choose a communication topology or schedule transfers for the program.

## Practical checks
Before enabling it, query whether the device pair supports peer access. Then measure the path: topology and link type still determine bandwidth and latency.
