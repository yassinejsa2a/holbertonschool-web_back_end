#!/usr/bin/env python3
"""Duck type an iterable object"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns list of tuples with elements and their lengths"""
    return [(i, len(i)) for i in lst]
