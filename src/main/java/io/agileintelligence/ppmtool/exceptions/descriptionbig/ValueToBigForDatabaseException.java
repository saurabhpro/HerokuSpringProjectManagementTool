package io.agileintelligence.ppmtool.exceptions.descriptionbig;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_GATEWAY)
public class ValueToBigForDatabaseException extends RuntimeException {
    public ValueToBigForDatabaseException(String msg) {
        super(msg);
    }
}
