#!/usr/bin/env python3
"""List all documents in Python"""


def list_all(mongo_collection):
    """Lists all documents in a collection"""
    if mongo_collection is None:
        return []
    result = list(mongo_collection.find())
    return result