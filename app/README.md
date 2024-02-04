# Fixup qc
`.replace(b'\xef\xbf\xbd', 'É'.encode()).replace(b'\xc3\x89', 'é'.encode())`