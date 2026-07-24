package com.cognizant.spring_learn.util;

import java.security.Key;
import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    private static final SecretKey SECRET_KEY =
            Keys.hmacShaKeyFor("ThisIsASecretKeyForJwtGeneration123456789".getBytes());
    public String generateToken(String username) {

        Date now = new Date();
        Date expiry = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour
        return Jwts.builder()
                .subject(username)
                .issuedAt(now)
                .expiration(expiry)
                .signWith(SECRET_KEY)
                .compact();
    }
}