#!/usr/bin/env python3
"""
Helper for calculating start and end indices for pagination.
"""
from typing import Tuple, List


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return start and end index for pagination.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index