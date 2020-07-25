# style-valid-input-form
custom input form with border color (Red) when them are required

# How to use
- Add class 'checar-campo' in input and
- Add required in input

```html

<!DOCTYPE html>
<html lang="en">
<head>

    <title>Index</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="validar-campos-form.js"></script>
</head>
<body>
    
    <form>
        <div>
            Input Data: <input type="date" required="required" class="checar-campo"/>
        </div>
        <div>
            Input Time: <input type="time" class="checar-campo" step="1" min="00:00:00"/>
        </div>
        <div>
            Selectbox:
        <select required="required">
            <option value="" selected="selected">Selecione Tipo </option>
            <option value="tipo-selecionado">Tipo Selecionado</option>
        </select>
        </div>
        <div>
            Text Area: 
            <textarea rows="5" cols="100" maxlength="500" required></textarea>	
        </div>
        <div>
            Input Text: <input type="text" required />
    	
        </div>
        
    </form>
    
</body>
</html>

```
