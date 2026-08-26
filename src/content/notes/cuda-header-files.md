---
title: "CUDA Header Files: Quotes vs. Angle Brackets"
description: "How include syntax affects where the compiler searches for a header."
date: 2026-08-24
tags: [CUDA, C++]
---
## The short version
Use `#include "timer.h"` for a header that belongs to your project. Use `#include <...>` for a system or library header found through configured include paths.

## Why it matters
The exact search order is implementation-defined, but quoted includes normally search relative to the including file before configured include directories. Angle brackets skip that local-first convention.
