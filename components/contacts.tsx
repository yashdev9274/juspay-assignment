import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contactsData, Contact } from "@/lib/mock-data";

export function Contacts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contacts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactsData.map((contact: Contact, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={contact.avatarSrc} alt={contact.avatarFallback} />
              <AvatarFallback>{contact.avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{contact.name}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
