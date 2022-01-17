import os

for filename in os.listdir("."):
    if not filename.endswith("py"):
        print("""<div class="carousel-image">
                     <img src="pictures/carousel/""" + filename + """">
                 </div>""")