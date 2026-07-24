package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLogging {

    private static final Logger logger =
            LoggerFactory.getLogger(
                    ParameterizedLogging.class
            );

    public static void main(String[] args) {

        String student = "Sai AbhiRam";
        int marks = 100;
        String result = "DOMINATED";

        logger.info(
                "Student {} scored {} marks and result is {}",
                student,
                marks,
                result
        );

    }
}
