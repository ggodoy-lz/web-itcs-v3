# -*- coding: utf-8 -*-
"""
Parches de texto (fragmento_exacto, reemplazo) para reaplicar o auditar
contenido tomado de la carpeta corporativa. Ejecutar solo si se reincorporan
archivos de plantilla en inglés.

Uso: python patch_content.py [--dry-run]
"""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# Cada tupla: (ruta_relativa, fragmento_exacto, reemplazo) — reemplazos en orden
PATCHES: list[tuple[str, str, str]] = [
    # — Ejemplos: no aplicar a archivos ya editados; descomentar al regenerar
    # ("app\\page.js", "At Zotech, our mission is to you empower businesses.", "…")
]


def main() -> int:
    dry = "--dry-run" in sys.argv
    n = 0
    for rel, old, new in PATCHES:
        path = ROOT / rel
        if not path.is_file():
            print("Missing:", path)
            return 1
        text = path.read_text(encoding="utf-8")
        if old not in text:
            print("Pattern not found in", rel)
            return 2
        if not dry:
            text = text.replace(old, new, 1)
            path.write_text(text, encoding="utf-8")
        n += 1
    print("Patched" if not dry else "Would patch", n, "occurrence(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
