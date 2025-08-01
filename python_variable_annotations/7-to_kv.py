#!/usr/bin/env python3
"""Type-annotated function to_kv"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with string k and square of v as float"""
    return (k, v ** 2)
