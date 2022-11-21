import argparse
from itertools import count
import os
import sys
import shutil
import re
import glob

if __name__ == '__main__':
  folders = ['compressedImg']
  for folder in folders:
    sub_folders = glob.glob(f'{folder}/*')
    for sub_folder in sub_folders:
      # print(sub_folder)
      files = glob.glob(f'{sub_folder}/*')
      count = 0
      for file in files:
        count+=1
        new_file_name = f'{file.split("/")[0]}/{file.split("/")[1]}/{file.split("/")[1].split("_")[-1]}_{file.split("/")[1].split("_")[0]}_{file.split("/")[1].split("_")[1]}_{count}.{file.split(".")[-1]}'
        # print(new_file_name)
        # os.rename(file, new_file_name)

        object_name = f'{file.split("/")[1].split("_")[-1]}_{file.split("/")[1].split("_")[0]}_{file.split("/")[1].split("_")[1]}_{count}'

        # print(f"import {object_name} from './static/{new_file_name}'")
        print(f"{object_name},")


      