# __all__ =['get_post_controler']
import os
import glob
__all__ = [os.path.basename(f)[:-3] for f in glob.glob(os.path.dirname(__file__)+'/*.py')]

# in above we are abstracting the files with extension .py and put it inside the__all__ list