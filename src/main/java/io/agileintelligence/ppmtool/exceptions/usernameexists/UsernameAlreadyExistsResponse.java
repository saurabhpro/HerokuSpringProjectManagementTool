package io.agileintelligence.ppmtool.exceptions.usernameexists;

import lombok.Data;
import lombok.Getter;

@Data
public class UsernameAlreadyExistsResponse {
    private final String username;
}
