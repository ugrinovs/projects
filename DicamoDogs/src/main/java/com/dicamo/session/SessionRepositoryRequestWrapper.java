package com.dicamo.session;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpSession;

/**
 * Created by Stefan on 15/11/2016.
 */
public class SessionRepositoryRequestWrapper extends HttpServletRequestWrapper{

    public SessionRepositoryRequestWrapper(HttpServletRequest original) {
        super(original);
    }

    public HttpSession getSession() {
        return getSession(true);
    }

    public HttpSession getSession(boolean createNew) {
        return getSession(createNew);
    }

    // ... other methods delegate to the original HttpServletRequest ...
}
