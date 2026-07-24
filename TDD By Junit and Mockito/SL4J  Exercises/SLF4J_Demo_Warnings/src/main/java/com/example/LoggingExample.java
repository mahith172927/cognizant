package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(
                    LoggingExample.class
            );

    public static void main(String[] args) {

        int loginAttempts = 4;
        boolean serverConnected = false;

        if(loginAttempts > 3)
        {
            logger.warn(
                    "Too many login attempts detected"
            );
        }

        if(!serverConnected)
        {
            logger.error(
                    "Database connection failed"
            );
        }

    }
}