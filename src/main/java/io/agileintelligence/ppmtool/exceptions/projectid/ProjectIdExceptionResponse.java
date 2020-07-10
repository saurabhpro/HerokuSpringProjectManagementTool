package io.agileintelligence.ppmtool.exceptions.projectid;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectIdExceptionResponse {
    private final String projectIdentifier;
}
