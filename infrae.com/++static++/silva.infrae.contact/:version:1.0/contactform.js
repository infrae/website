// We have to "emulate" placeholder attribute behaviour
// for browser that don't support it (e.g. internet explorer less than version 10)
(function(){
    $(document).ready(function(){

        var placeholder_support = (function has_placeholder_support() {
            var input = document.createElement('input');
            return ('placeholder' in input);
        })();

        if(placeholder_support === false){
            var placeholder = '';
            var value = '';
            $('#contactusform input, #contactusform textarea').each(function(){
                placeholder = $(this).attr('placeholder');
                $(this).css('color', '#888');
                $(this).attr('value', placeholder);

                $(this).on('keypress', function(){
                    placeholder = $(this).attr('placeholder');
                    value = $(this).attr('value');
                    if(value == placeholder){
                        $(this).attr('value', '');
                        $(this).css('color', '#222');
                    }
                });
                $(this).on('focusout', function(){
                    value = $(this).attr('value');
                    if(value === ''){
                        placeholder = $(this).attr('placeholder');
                        $(this).css('color', '#888');
                        $(this).attr('value', placeholder);
                    }
                });
            });
        }
    });
})();
