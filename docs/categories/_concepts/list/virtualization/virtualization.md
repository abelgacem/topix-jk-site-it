---
layout: topic
mx:
---


# {{site.data.name.definition}}
- Derived from the verb "virtualize".
- It consists of **abstracting** ({{site.data.name.ie}} replacing) one or more concrete, physical resources by code ({{site.data.name.ie}} algorithms).

# How to Virtualize
The virtualization process typically involves these phases:
  - Modeling the physical resource.
    - Creating a digital representation of the physical resource.
  - Coding the Model.
    - Implementing the model through code: 
    - Developing software that **mimics** the behavior of the resource.
  - **Runing the Code**
    - Integrating the virtual resource into a broader {{site.data.name.it}} system, allowing it to function as part of the overall infrastructure.

# What can be and is virtualized
- memory, processor, storage.
- Network and network device.
- applications, commonly referred to as **containerized applicarion**.
- computers, commonly referred to as {{site.data.name.vm}} (**Virtual Machines**).
- Desktops computer (VDI. Virtual Desktop Infrastructure).
- Datacenter (SDDC. Software-defined data centers).
- And more recently, **intelligence** with the rise of {{site.data.name.ai} and {site.data.name.ml}}. Such resource are refered as {{site.data.name.ais}}.

# What mean "run the code"
It means
- The code runs in an **isolated environment**.
- The isolated environment runs inside another environment refered as the Host Environment.
- The isolated environment needs a runtime on the Host.

# What mean "isolated environement"
It depends:
- if it is a virtual os:   it is an  **hypervisor**
- if it is virtual   application, it can be a **{{site.data.name.vm}}** or a **container**
- if it is a container, it can be a **{{site.data.name.vm}}** or a **container**

# Why Virtualize

Virtualization offers several key advantages:

- Leverage of the model:
  - Possibility to add capabilities, that were not support by the physical resource it model.
  - Provides capabilities beyond those of the physical resource it replicates.
  - Simulates near-infinite availability of the resource, improving scalability and resource management.

- Leverage of code:
  - The virtualized resource becomes **flexible, scalable, adaptable and evolutive**.
  - The virtualized resource becomes now instanciable like any class in an object-oriented programming, allowing to create a specific resource that adpat to a specific context or requirements.


# Performance Considerations

- A **virtualized resource** may not match the performance of its physical counterpart.
- However, due to the numerous benefits and the flexibility it offers, virtualization is adopted wherever possible.


# Definition

- VM runs 1 OS among N
- VM in VM
- Container in VM
- Container in Container


# Example
- Microsoft 365 or Google Workspace, allow users to run applications in a virtualized environment through a browser
- Container allows applications to be virtualized by packaging them along with all their dependencies.
- VDI  - virtual desktop interface are virtual desktop computer hosted on a central server streamed to the end user (e.g., Citrix, VMware Horizon).
- Tools like Salesforce or Adobe Creative Cloud allow users to work from a browser or thin client without worrying about local hardware compatibility.
- Software like VMware ThinApp or Microsoft App-V lets businesses package applications so that they can run in isolated virtual environments on different devices.

# Historically
- Run a Guest OS (eg. Linux)) inside a Host OS (eg. Windows/Linux) 
  - Isolate processes that runs inside the Guest FROM the processes that run inside the Host OS
  - Windows WSL 



# Additional Key Questions

1. **How are resources allocated between the guest OS and host OS?**
   - How does the hypervisor manage resources like CPU, memory, and storage to ensure optimal performance for both the guest and host systems?
  
2. **What isolation mechanisms are in place to protect the host OS from the guest OS?**
   - How does the virtualization layer prevent security vulnerabilities or failures in the guest OS from affecting the host system?

3. **How are network resources managed between the host and guest OS?**
   - How does the guest OS interact with network interfaces? Are virtual network adapters used to simulate network traffic between guest, host, and external networks?

4. **What are the performance impacts of guest-to-host communication?**
   - Does allowing communication between guest and host processes introduce latency or other performance penalties? How is this managed?

5. **How is data transferred between the host and guest OS?**
   - What mechanisms are used to transfer files or data between virtual machines and the physical host? Are shared folders or virtual disks commonly employed?

6. **How are I/O operations managed between virtual and physical hardware?**
   - How does the virtual machine handle input/output (I/O) requests to physical devices like hard drives, network cards, or GPUs, especially if multiple guest OS instances share the same physical hardware?

7. **What role does the hypervisor play in mediating guest-host communication?**
   - How does the hypervisor facilitate or control communication between guest and host, and what type of hypervisor (Type 1 or Type 2) is most suitable for different types of interaction?

8. **What kind of security policies should be in place for guest-host communication?**
   - Should there be strict policies for inter-process communication between guest and host systems to ensure security? If some communication is necessary, how can it be securely managed?

9. **How is the guest OS updated and managed from the host?**
   - How does the host system manage updates, patching, and maintenance of guest OS instances, especially when they need to remain isolated?

## Should the Guest Os and Host Os Communicate?

If communication is necessary between guest and host processes:

- **What type of communication is needed?**
  - Is it data exchange, resource sharing, or inter-process signaling?

- **Which specific processes or services should interact?**
  - Is the communication limited to monitoring tools, file sharing, or system management tasks?

- **What protocols are used to facilitate this communication?**
  - Are special APIs, shared memory segments, or network sockets used to ensure smooth and secure communication between the systems?

