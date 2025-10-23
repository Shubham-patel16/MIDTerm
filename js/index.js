//  create function for the Factorial calculation
function factorial(n)
{
    if (n<0) return null; // if user enters null value it returns null
    let result=1;
    for (let i=1; i<=n; i++) {
        result*=i;
    }
    return result;
}

// Called when pressing Enter button
function calculateFactorial()
{
    const inputEl=document.getElementById('inputNumber');
    const outputEl=document.getElementById('output');
    const val=Number(inputEl.value);

    if (!Number.isInteger(val)||val<0) {
        outputEl.textContent='Please enter a non-negative integer.';
        return;
    }

    const fact=factorial(val);
    outputEl.textContent=`${val}! = ${fact}`;
}
document.getElementById('enterBtn').addEventListener('click', calculateFactorial);

// Dark/Light Mode
document.querySelectorAll('[data-bs-theme-value]').forEach(btn =>
{
    btn.addEventListener('click', (e) =>
    {
        const theme=e.currentTarget.getAttribute('data-bs-theme-value');
        document.documentElement.setAttribute('data-bs-theme', theme);
    });
});