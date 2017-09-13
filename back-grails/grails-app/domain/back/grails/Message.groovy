package back.grails

import grails.rest.Resource

@Resource(uri = '/messages', readOnly = false, formats = ['json', 'xml'])
class Message {
    String content
    String username
    Date timestamp = new Date()

    static constraints = {
        username blank: false
    }
    
    static mapping = {
        version false
        id generator: 'increment'
        cache true
    }
    
}
