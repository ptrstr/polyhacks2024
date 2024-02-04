import pandas as pd
import sys
dat = pd.read_csv(sys.argv[1])

dat.reset_index().to_json(sys.argv[2], orient='records')