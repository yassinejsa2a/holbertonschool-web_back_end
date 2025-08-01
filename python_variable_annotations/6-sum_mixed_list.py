#!/usr/bin/env python3
"""Type-annotated function sum_mixed_list"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns sum of integers and floats in mxd_lst"""
    return sum(mxd_lst)
