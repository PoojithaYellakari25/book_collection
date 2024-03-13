export function show(pass) {
    const pass_id=pass.current;
    if (pass_id.type === "password") {
        pass_id.type = "text";
    } else {
        pass_id.type = "password";
    }
}