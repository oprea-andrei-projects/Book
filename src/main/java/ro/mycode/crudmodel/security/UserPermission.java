package ro.mycode.crudmodel.security;


import lombok.AllArgsConstructor;

public enum UserPermission {

    BOOK_READ("book:read"),
    BOOK_WRITE("book:write"),
    USER_READ("user:read"),
    USER_WRITE("user:write");
    private String permission;

    public String getPermission() {
        return permission;
    }

    UserPermission(String permission) {
        this.permission = permission;
    }
}
