BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD`

if [ "$BRANCH" = "master" ]; then 
    echo "M" 
else
    echo "N"  
fi;