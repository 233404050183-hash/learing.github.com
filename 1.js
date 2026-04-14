<script>
function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Danh sách tài khoản
    const users = [
        {username: "sv01", password: "123", role: "sinhvien"},
        {username: "gv01", password: "123", role: "giangvien"}
    ];

    // Tìm tài khoản
    let found = users.find(u => u.username === user && u.password === pass);

    if(found){
        if(found.role === "sinhvien"){
            window.location.href = "sinhvien.html";
        }else if(found.role === "giangvien"){
            window.location.href = "giangvien.html";
        }
        return false;
    }else{
        document.getElementById("error").innerText = "Sai tài khoản hoặc mật khẩu!";
        return false;
    }
}
</script>