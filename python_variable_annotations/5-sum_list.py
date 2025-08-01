#!/usr/bin/env python3
"""Type-annotated function sum_list"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Returns sum of floats in input_list"""
    return sum(input_list)
