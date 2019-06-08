<script async type="text/javascript"> // Handle when image displayed in website
    document.addEventListener("DOMContentLoaded", function(event) {
        document.querySelectorAll('img').forEach(function(img) {
            img.onerror = function(){
                this.style.display='none'
            }
        })
    })
</script>
<center>
    <img src=".github/logo.png" alt="logo" width="400" onerror="this.src='../.github/logo.png'"/>
</center>

# [Documentation](index.html)