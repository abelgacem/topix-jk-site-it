---
layout: topic
mx:
---


# {{site.data.name.definition}}
- Derived from the verb "virtualize".
- It consists of **abstracting** ({{site.data.name.ie}} replacing) one or more concrete, physical resources by code ({{site.data.name.ie}} algorithms).

# How it works
The virtualization process typically involves these phases:
  - Modeling the physical resource.
    - Concepting a digital representation of the physical resource.
  - Coding the Model.
    - Implementing the model through code. 
    - Developing software that **mimics** the behavior of the resource.
  - **Runing the Code**
    - Integrating the virtual resource into a broader {{site.data.name.it}} system, allowing it to function as part of the overall infrastructure.

# What can be and is virtualized
- memory, processor, storage.
- Network and network devices.
- applications, commonly referred to as **containerized application**.
  - client application.
  - server application.
- computers, commonly referred to as {{site.data.name.vm}} (**Virtual Machines**).
- Desktop computers, referred to as VDI. (Virtual Desktop Infrastructure).
- Datacenter, referred to as VDI SDDC. (Software-defined data centers).
- And more recently, **intelligence** with the rise of {{site.data.name.ai} and {site.data.name.ml}},  commonly referred to as {{site.data.name.ais}}.

# What mean "run the code"
It means
- The code is an **isolated environment** OR 
- The code runs inside an **isolated environment**.


# What is an "isolated environement"
- Is often refered as the **Guest**.
- Runs inside another environment refered as the **Host**.
- Needs a dependency on the **Host** to run, refered as 
  - the **container runtime** (for a container)
  - the **hypervisor**        (for a {{site.data.name.vm}}).


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


# {{site.data.name.toknow}}

- {{site.data.name.vm}} runs 1 {{site.data.name.os}} with its own kernel.
- Container runs 1 lightweight {{site.data.name.os}} and share the Host {{site.data.name.os}} kernel.
- {{site.data.name.vm}} can run within a {{site.data.name.vm}}. It's rarely recomended
- Container usually runs within a {{site.data.name.vm}}.
- Container can run within a container (in very specific context).
- Historcally:
  - Linux Guest OS (Linux) runs inside a Linux Host
  - Linux Guest OS (Linux) runs inside a Windows Host (WSL)
  - The concept of isolated environments began with Linux cgroups (control groups), which enabled process and resource isolation.


# Example
- Microsoft 365 or Google Workspace, allow users to run applications in a virtualized environment streamed through a browser.
- VDI  - virtual desktop interface are virtual desktop computer hosted on a central server streamed to the end user (e.g., Citrix, VMware Horizon).
- Tools like Salesforce or Adobe Creative Cloud allow users to work from a browser or thin client without worrying about local hardware compatibility.
- Software like VMware ThinApp or Microsoft App-V lets businesses package applications so that they can run in isolated virtual environments on different devices.

# Historically

- 1 evolution of the {{site.data.name.linux}}:concept:{{site.data.name.process}} to {{site.data.name.linux}}:concept:{{site.data.name.container}}
- allows to 
  - Iisolate a tree of process
  - Run Applications's processes in 1 isolated environment


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

