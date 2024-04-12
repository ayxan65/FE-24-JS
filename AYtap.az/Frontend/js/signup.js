const url2 = "http://localhost:3000/Users/";
const SubmitButton = document.querySelector("#SubmitBtn");
const NameInput = document.querySelector("#name");
const UserInput = document.querySelector("#username");
const PassInput = document.querySelector("#pass");

SubmitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = NameInput.value;
    const username = UserInput.value;
    const password = PassInput.value;

    if (!name || !username || !password) {
        alert("Xanaları tam doldurun.");
        return;
    }

    try {
        const { data } = await axios(url2);
        const existingUser = data.find(user => user.username === username);
        if (existingUser) {
            Swal.fire({
                title: "Belə bir istifadəçi var",
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                }
            });
        } else {
            await axios.post(url2, { name, username, password });
            alert("İstifadəçi əlavə olundu.");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Xəta baş verdi. İstifadəçi əlavə olunmadı.");
    }
});
