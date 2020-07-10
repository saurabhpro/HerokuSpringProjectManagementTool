package io.agileintelligence.ppmtool.exceptions.projectnotfound;

import lombok.Data;

@Data
public class ProjectNotFoundExceptionResponse {
    private final String projectNotFound;
}