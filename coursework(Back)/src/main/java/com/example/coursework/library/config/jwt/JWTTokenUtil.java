package com.example.coursework.library.config.jwt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.function.Function;

@Component
public class JWTTokenUtil {

    // 7 дней в миллисекундах (время жизни токена)
    public static final long JWT_TOKEN_VALIDITY = 604800000;

    // Секретный ключ для подписи токена
    private final String secret = "11231se7f1271e2oee";

    private static final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Генерация JWT токена на основе данных пользователя
     * @param payload данные пользователя
     * @return JWT токен
     */
    public String generateToken(final UserDetails payload) {
        return Jwts.builder()
                .setSubject(payload.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
    public Boolean validateToken(final String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    /**
     * Проверка истечения срока действия токена
     * @param token JWT токен
     * @return true если токен истек
     */
    private Boolean isTokenExpired(final String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    /**
     * Получение даты истечения токена
     * @param token JWT токен
     * @return дата истечения
     */
    private Date getExpirationDateFromToken(String token) {
        return getClaimsFromToken(token, Claims::getExpiration);
    }

    /**
     * Получение имени пользователя из токена
     * @param token JWT токен
     * @return имя пользователя
     */
    public String getUsernameFromToken(final String token) {
        return getStringValueFromTokenByKey(token, "username");
    }

    /**
     * Получение роли пользователя из токена
     * @param token JWT токен
     * @return роль пользователя
     */
    public String getRoleFromToken(final String token) {
        return getStringValueFromTokenByKey(token, "user_role");
    }

    /**
     * Получение значения по ключу из токена
     * @param token JWT токен
     * @param key ключ для поиска
     * @return значение по ключу
     */
    private String getStringValueFromTokenByKey(final String token, final String key) {
        String claim = getClaimsFromToken(token, Claims::getSubject);
        JsonNode claimJSON = null;
        try {
            claimJSON = objectMapper.readTree(claim);
        } catch (JsonProcessingException e) {
            log.error("JWTTokenUtil(getStringValueFromTokenByKey): {}", e.getMessage());
        }

        if (claimJSON != null && claimJSON.has(key)) {
            return claimJSON.get(key).asText();
        }
        return null;
    }

    /**
     * Получение конкретного claim из токена
     * @param token JWT токен
     * @param claimsResolver функция для извлечения claim
     * @return значение claim
     */
    private <T> T getClaimsFromToken(final String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Получение всех claims из токена
     * @param token JWT токен
     * @return все claims токена
     */
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
    }
}
