#!/usr/bin/env python3
"""Type-annotated function make_multiplier"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns function that multiplies a float by multiplier"""
    def multiply(n: float) -> float:
        """Multiply n by multiplier"""
        return n * multiplier
    return multiply
