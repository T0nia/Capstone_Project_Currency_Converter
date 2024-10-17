
const CurrencyConverter = () => {
// https://api.frankfurter.app/currencies this endpoint is for currency symbols and their names
// https://api.frankfurter.app/latest?amount=1&from=USD&to=ZAR this endpoint is for conversion 

    return (
        //converter container properties
<div className="max-w-2xl mx-auto my-10 p-10 rounded-2xl bg-blue-300"> 

<div>Dropdowns</div>

<div className="mt-4">
<label htmlFor="amount">Amount:</label>
<input type="number"/>
</div>

</div>
    );
};

export default CurrencyConverter;