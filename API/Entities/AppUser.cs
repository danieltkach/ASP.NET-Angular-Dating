using System.Security.AccessControl;

namespace API.Entities;

public class AppUser
{
  public string Id { get; set; } = Guid.NewGuid().ToString();
  public required string DisplayName { get; set; }
}
