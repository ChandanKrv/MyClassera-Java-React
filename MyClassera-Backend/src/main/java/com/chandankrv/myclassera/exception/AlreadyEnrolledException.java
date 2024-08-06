package com.chandankrv.myclassera.exception;

/**
 * Created by Chandan on 06 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */

public class AlreadyEnrolledException extends RuntimeException {
    public AlreadyEnrolledException(String message) {
        super(message);
    }
}

