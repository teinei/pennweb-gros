//replace space with underscore
for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done

//add .mp4 file extension
for f in *; do mv $f `basename $f `.mp4; done;